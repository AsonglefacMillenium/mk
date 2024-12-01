// import React, { useEffect, useState } from "react";
// import styles from "./styles.module.css";
// import SearchLayout from "@/components/templates/layout_search";
// import EmployeeCard from "@/components/organisms/employee_card";
// import { Employee } from "@/types/types";
// import axios from "axios";

// const SearchPage = () => {
//   const [employees, setEmployees] = useState<Employee[]>([]);
//   const [searchQuery, setSearchQuery] = useState<string>("");

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

//   const filteredEmployees = employees.filter((employee) => {
//     // Normalize the search query by replacing commas with spaces
//     const normalizedQuery = searchQuery.replace(/,/g, " ");

//     // Split into terms by spaces
//     const searchTerms = normalizedQuery.toLowerCase().split(/\s+/).filter(Boolean);

//     // Check if all terms match any field of the employee
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

//   return (
//     <SearchLayout searchparam={searchQuery} setSearchQuery={setSearchQuery}>
//       <div className={styles.cards_wrapper}>
//         {filteredEmployees.length > 0 ? (
//           filteredEmployees.map((employee) => (
//             <EmployeeCard
//               key={employee.id}
//               name={`${employee.name} ${employee.surname}`}
//               subdivisions1={employee.subdivision_1?.name}
//               subdivisions2={employee.subdivision_2?.name}
//               position={employee.position.name}
//             />
//           ))
//         ) : (
//           <p>No employees found</p>
//         )}
//       </div>
//     </SearchLayout>
//   );
// };

// export default SearchPage;

import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import SearchLayout from "@/components/templates/layout_search";
import EmployeeCard from "@/components/organisms/employee_card";
import { Employee } from "@/types/types";
import axios from "axios";

const ITEMS_PER_PAGE = 10; // Number of items per page

const SearchPage = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axios.get("http://localhost/api/employees/");
        setEmployees(res.data);
      } catch (error) {
        console.error("Failed to fetch employees:", error);
      }
    };

    fetchEmployees();
  }, []);

  // Filter employees based on search query
  const filteredEmployees = employees.filter((employee) => {
    const normalizedQuery = searchQuery.replace(/,/g, " ");
    const searchTerms = normalizedQuery
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean);

    return searchTerms.every((term) => {
      return (
        employee.name?.toLowerCase().includes(term) ||
        employee.surname?.toLowerCase().includes(term) ||
        employee.role?.name?.toLowerCase().includes(term) ||
        employee.city?.name?.toLowerCase().includes(term) ||
        employee.position?.name?.toLowerCase().includes(term) ||
        employee.subdivision_1?.name?.toLowerCase().includes(term) ||
        employee.subdivision_2?.name?.toLowerCase().includes(term)
      );
    });
  });

  // Calculate total pages
  const totalPages = Math.ceil(filteredEmployees.length / ITEMS_PER_PAGE);

  // Get employees for the current page
  const paginatedEmployees = filteredEmployees.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Handle page navigation
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <SearchLayout searchparam={searchQuery} setSearchQuery={setSearchQuery}>
      <div className={styles.content_holder}>
        <div className={styles.cards_wrapper}>
          {paginatedEmployees.length > 0 ? (
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
              const isStart = page <= 5; // Always show the first 5 pages
              const isEnd = page > totalPages - 5; // Always show the last 5 pages
              const isNearCurrent = Math.abs(currentPage - page) <= 5; // Show 5 pages to the left and right of the current page

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

              // Show dots for skipped pages
              if (
                page === currentPage - 6 || // Dots before the current page
                page === currentPage + 6 // Dots after the current page
              ) {
                return (
                  <span key={page} className={styles.dots}>
                    ...
                  </span>
                );
              }

              return null; // Skip rendering for other pages
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
    </SearchLayout>
  );
};

export default SearchPage;
