// // import React, { useEffect, useState } from "react";
// // import styles from "./styles.module.css";
// // import SearchLayout from "@/components/templates/layout_search";
// // import EmployeeCard from "@/components/organisms/employee_card";
// // import { Employee } from "@/types/types";
// // import axios from "axios";

// // const SearchPage = () => {
// //   const [employees, setEmployees] = useState<Employee[]>([]);
// //   const [searchQuery, setSearchQuery] = useState<string>("");

// //   useEffect(() => {
// //     const fetchEmployees = async () => {
// //       try {
// //         const res = await axios.get("http://localhost/api/employees/");
// //         setEmployees(res.data);
// //       } catch (error) {
// //         console.error("Failed to fetch employees:", error);
// //       }
// //     };

// //     fetchEmployees();
// //   }, []);

// //   const filteredEmployees = employees.filter((employee) => {
// //     // Normalize the search query by replacing commas with spaces
// //     const normalizedQuery = searchQuery.replace(/,/g, " ");

// //     // Split into terms by spaces
// //     const searchTerms = normalizedQuery.toLowerCase().split(/\s+/).filter(Boolean);

// //     // Check if all terms match any field of the employee
// //     return searchTerms.every((term) => {
// //       return (
// //         employee.name?.toLowerCase().includes(term) ||
// //         employee.surname?.toLowerCase().includes(term) ||
// //         employee.role?.name?.toLowerCase().includes(term) ||
// //         employee.city?.name?.toLowerCase().includes(term) ||
// //         employee.position?.name?.toLowerCase().includes(term) ||
// //         employee.subdivision_1?.name?.toLowerCase().includes(term) ||
// //         employee.subdivision_2?.name?.toLowerCase().includes(term)
// //       );
// //     });
// //   });

// //   return (
// //     <SearchLayout searchparam={searchQuery} setSearchQuery={setSearchQuery}>
// //       <div className={styles.cards_wrapper}>
// //         {filteredEmployees.length > 0 ? (
// //           filteredEmployees.map((employee) => (
// //             <EmployeeCard
// //               key={employee.id}
// //               name={`${employee.name} ${employee.surname}`}
// //               subdivisions1={employee.subdivision_1?.name}
// //               subdivisions2={employee.subdivision_2?.name}
// //               position={employee.position.name}
// //             />
// //           ))
// //         ) : (
// //           <p>No employees found</p>
// //         )}
// //       </div>
// //     </SearchLayout>
// //   );
// // };

// // export default SearchPage;

// import React, { useEffect, useState } from "react";
// import styles from "./styles.module.css";
// import SearchLayout from "@/components/templates/layout_search";
// import EmployeeCard from "@/components/organisms/employee_card";
// import { Employee } from "@/types/types";
// import axios from "axios";

// const ITEMS_PER_PAGE = 10; // Number of items per page

// const SearchPage = () => {
//   const [employees, setEmployees] = useState<Employee[]>([]);
//   const [searchQuery, setSearchQuery] = useState<string>("");
//   const [currentPage, setCurrentPage] = useState<number>(1);

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const res = await axios.get("http://localhost/api/employees/");
//         setEmployees(res.data);
//       } catch (error) {
//         console.error("Failed to fetch employees:", error);
//       }
//     };

//     fetchEmployees();
//   }, []);

//   // Filter employees based on search query
//   const filteredEmployees = employees.filter((employee) => {
//     const normalizedQuery = searchQuery.replace(/,/g, " ");
//     const searchTerms = normalizedQuery
//       .toLowerCase()
//       .split(/\s+/)
//       .filter(Boolean);

//     return searchTerms.every((term) => {
//       return (
//         employee.name?.toLowerCase().includes(term) ||
//         employee.surname?.toLowerCase().includes(term) ||
//         employee.role?.name?.toLowerCase().includes(term) ||
//         employee.city?.name?.toLowerCase().includes(term) ||
//         employee.position?.name?.toLowerCase().includes(term) ||
//         employee.subdivision_1?.name?.toLowerCase().includes(term) ||
//         employee.subdivision_2?.name?.toLowerCase().includes(term)
//       );
//     });
//   });

//   // Calculate total pages
//   const totalPages = Math.ceil(filteredEmployees.length / ITEMS_PER_PAGE);

//   // Get employees for the current page
//   const paginatedEmployees = filteredEmployees.slice(
//     (currentPage - 1) * ITEMS_PER_PAGE,
//     currentPage * ITEMS_PER_PAGE
//   );

//   // Handle page navigation
//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   return (
//     <SearchLayout searchparam={searchQuery} setSearchQuery={setSearchQuery}>
//       <div className={styles.content_holder}>
//         <div className={styles.cards_wrapper}>
//           {paginatedEmployees.length > 0 ? (
//             paginatedEmployees.map((employee) => (
//               <EmployeeCard
//                 key={employee.id}
//                 name={`${employee.name} ${employee.surname}`}
//                 subdivisions1={employee.subdivision_1?.name}
//                 subdivisions2={employee.subdivision_2?.name}
//                 position={employee.position.name}
//               />
//             ))
//           ) : (
//             <p>No employees found</p>
//           )}
//         </div>

//         {/* Pagination Controls */}
//         <div className={styles.pagination}>
//           {/* Previous Button */}
//           <button
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//           >
//             Previous
//           </button>

//           {/* Page Bullets with Dots */}
//           {Array.from({ length: totalPages }, (_, index) => index + 1).map(
//             (page) => {
//               const isStart = page <= 5; // Always show the first 5 pages
//               const isEnd = page > totalPages - 5; // Always show the last 5 pages
//               const isNearCurrent = Math.abs(currentPage - page) <= 5; // Show 5 pages to the left and right of the current page

//               if (isStart || isEnd || isNearCurrent) {
//                 return (
//                   <button
//                     key={page}
//                     className={currentPage === page ? styles.active : ""}
//                     onClick={() => handlePageChange(page)}
//                   >
//                     {page}
//                   </button>
//                 );
//               }

//               // Show dots for skipped pages
//               if (
//                 page === currentPage - 6 || // Dots before the current page
//                 page === currentPage + 6 // Dots after the current page
//               ) {
//                 return (
//                   <span key={page} className={styles.dots}>
//                     ...
//                   </span>
//                 );
//               }

//               return null; // Skip rendering for other pages
//             }
//           )}

//           {/* Next Button */}
//           <button
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage === totalPages}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </SearchLayout>
//   );
// };

// export default SearchPage;

import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import SearchLayout from "@/components/templates/layout_search";
import EmployeeCard from "@/components/organisms/employee_card";
import Sidebar from "@/components/organisms/sidebar";
import { Employee } from "@/types/types";
import axios from "axios";

const ITEMS_PER_PAGE = 10; // Number of items per page
const DEBOUNCE_DELAY = 2000;

const SearchPage = () => {
  // const [employees, setEmployees] = useState<Employee[]>([]);
  // const [searchQuery, setSearchQuery] = useState<string>("");
  // const [currentPage, setCurrentPage] = useState<number>(1);
  // const [selectedFilters, setSelectedFilters] = useState<string[]>([]); // Sidebar filters

  // useEffect(() => {
  //   const fetchEmployees = async () => {
  //     try {
  //       const res = await axios.get("http://localhost/api/employees_search/");
  //       setEmployees(res.data);
  //     } catch (error) {
  //       console.error("Failed to fetch employees:", error);
  //     }
  //   };

  //   fetchEmployees();
  // }, []);

  // // Filter employees based on search query and sidebar filters
  // const filteredEmployees = employees.filter((employee) => {
  //   const normalizedQuery = searchQuery.replace(/,/g, " ");
  //   const searchTerms = normalizedQuery
  //     .toLowerCase()
  //     .split(/\s+/)
  //     .filter(Boolean);

  //   const matchesSearchQuery = searchTerms.every((term) => {
  //     return (
  //       employee.name?.toLowerCase().includes(term) ||
  //       employee.surname?.toLowerCase().includes(term) ||
  //       employee.role?.name?.toLowerCase().includes(term) ||
  //       employee.city?.name?.toLowerCase().includes(term) ||
  //       employee.position?.name?.toLowerCase().includes(term) ||
  //       employee.subdivision_1?.name?.toLowerCase().includes(term) ||
  //       employee.subdivision_2?.name?.toLowerCase().includes(term) ||
  //       employee.functional_block?.name?.toLowerCase().includes(term)
  //     );
  //   });

  //   const matchesFilters =
  //     selectedFilters.length === 0 || // No filters selected
  //     selectedFilters.some((filter) =>
  //       [
  //         employee.subdivision_1?.id.toString(),
  //         employee.subdivision_2?.id.toString(),
  //         employee.role?.id.toString(),
  //         employee.city?.id.toString(),
  //         employee.position?.id.toString(),
  //       ].includes(filter)
  //     );

  //   return matchesSearchQuery && matchesFilters;
  // });

  // // Calculate total pages
  // const totalPages = Math.ceil(filteredEmployees.length / ITEMS_PER_PAGE);

  // // Get employees for the current page
  // const paginatedEmployees = filteredEmployees.slice(
  //   (currentPage - 1) * ITEMS_PER_PAGE,
  //   currentPage * ITEMS_PER_PAGE
  // );

  // // Handle page navigation
  // const handlePageChange = (page: number) => {
  //   setCurrentPage(page);
  // };

  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>(""); // For user input
  const [debouncedQuery, setDebouncedQuery] = useState<string>(""); // For delayed API call
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]); // For sidebar filters
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false); // For loading state
  const [error, setError] = useState<string | null>(null); // For error handling

  // Debounce Effect: Delay API query until user stops typing
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, DEBOUNCE_DELAY);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  // Fetch employees based on search query and filters
  useEffect(() => {
    const fetchEmployees = async () => {
      setLoading(true);
      setError(null);

      try {
        const searchParams = new URLSearchParams();
        if (debouncedQuery) searchParams.append("search", debouncedQuery);
        if (selectedFilters.length > 0) {
          searchParams.append("search", selectedFilters.join(","));
        }

        const res = await axios.get(
          `http://localhost:8000/api/employees_search/?${searchParams.toString()}`
        );
        setEmployees(res.data);
      } catch (err) {
        setError("Failed to fetch employees. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, [debouncedQuery, selectedFilters]);

  // Pagination logic
  const totalPages = Math.ceil(employees.length / ITEMS_PER_PAGE);
  const paginatedEmployees = employees.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <SearchLayout
      searchparam={searchQuery}
      setSearchQuery={setSearchQuery}
      selectedFilters={selectedFilters}
      setSelectedFilters={setSelectedFilters}
    >
      <div className={styles.layout_wrapper}>
        {/* Main Content */}
        <div className={styles.main_wrapper}>
          <div className={styles.cards_wrapper}>
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>{error}</p>
            ) : paginatedEmployees.length > 0 ? (
              paginatedEmployees.map((employee) => (
                <EmployeeCard
                  key={employee.id}
                  name={`${employee.name} ${employee.surname}`}
                  subdivisions1={employee.subdivision_1?.name}
                  subdivisions2={employee.subdivision_2?.name}
                  position={employee.position.name}
                />
              ))
            ) : (
              <p>No employees found</p>
            )}
          </div>

          {/* Pagination Controls */}
          <div className={styles.pagination}>
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            {/* Page Bullets with Dots */}
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => {
                const isStart = page <= 5;
                const isEnd = page > totalPages - 5;
                const isNearCurrent = Math.abs(currentPage - page) <= 5;

                if (isStart || isEnd || isNearCurrent) {
                  return (
                    <button
                      key={page}
                      className={currentPage === page ? styles.active : ""}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </button>
                  );
                }

                if (page === currentPage - 6 || page === currentPage + 6) {
                  return (
                    <span key={page} className={styles.dots}>
                      ...
                    </span>
                  );
                }

                return null;
              }
            )}

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </SearchLayout>
  );
};

export default SearchPage;
