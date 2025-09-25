import { useSession } from "@clerk/clerk-react";
import useFetch from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import { getJobs } from "@/api/apiJobs";
import { BarLoader } from "react-spinners";
import JobCard from "@/components/JobCard";
import { getCompanies } from "@/api/apiCompanies";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { State } from "country-state-city";

const JobListing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [company_id, setCompany_id] = useState("");

  const { session, isLoaded } = useSession();
  // const {isLoaded} = useUser();

  const {
    fn: fnJobs,
    data: jobsData,
    loading: loadingJobs,
  } = useFetch(getJobs, {
    location,
    company_id,
    searchQuery,
  });

  useEffect(() => {
    if (isLoaded && session) {
      fnJobs();
    }
  }, [isLoaded, session, location, company_id, searchQuery]);

  const { fn: fnCompanies, data: companies } = useFetch(getCompanies);

  useEffect(() => {
    if (isLoaded) {
      fnCompanies();
    }
  }, [isLoaded]);

  // Loader
  if (!isLoaded) {
    // add loader
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }

  const handleSearch = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    const query = formData.get("search-query");
    if (query) {
      setSearchQuery(query);
    }
  };

  const clearFilters = () => {
    setSearchQuery("");
    setCompany_id("");
    setLocation("");
  };

  // if (!isLoaded) return <div>Loading session...</div>;
  // if (loadingJobs) return <div>Loading jobs...</div>;
  // if (jobsError) return <div>Error: {jobsError.message}</div>;

  console.log(jobsData);

  return (
    <div className="">
      <h1 className="font-extrabold text-gray-200 text-center pb-8 text-6xl sm:text-7xl">
        Latest Jobs
      </h1>
      {/* add filter here */}
      {/* Search By Title  */}
      <form
        onSubmit={handleSearch}
        className="h-14 w-full flex gap-3 items-center mb-3 px-8"
      >
        <Input
          type="text"
          placeholder="Search Jobs By Title..."
          name="search-query"
          className="flex-1 h-full px-4 font-medium"
        />
        <Button variant="blue" type="submit" className="h-full sm:w-28">
          Search
        </Button>
      </form>

      {/* Search by location or company name */}
      <div className="flex flex-col sm:flex-row gap-2 px-8">
        <Select  value={location} onValueChange={(value) => setLocation(value)}>
          <SelectTrigger className="flex-1 w-full">
            <SelectValue placeholder="Filter by Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {State.getStatesOfCountry("IN").map(({ name }) => {
                return (
                  <SelectItem key={name} value={name}>
                    {name}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select 
          value={company_id}
          onValueChange={(value) => setCompany_id(value)}
        >
          <SelectTrigger className="flex-1 w-full">
            <SelectValue placeholder="Filter by Company" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {companies?.map(({ name, id }) => {
                return (
                  <SelectItem key={name} value={id}>
                    {name}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button
          className="sm:w-1/2 flex-1 w-full"
          variant="destructive"
          onClick={clearFilters}
        >
          Clear Filters
        </Button>
      </div>

      {loadingJobs && (
        <BarLoader className="mt-4" width={"100%"} color="#36d7b7" />
      )}

      {loadingJobs === false && (
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 px-8 gap-4">
          {jobsData?.length === 0 ? (
            <p>No jobs available</p>
          ) : (
            jobsData?.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                savedInit={job?.saved?.length > 0}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default JobListing;
