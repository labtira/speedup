import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, SlidersHorizontal, ChevronLeft, ChevronRight } from "lucide-react";
import CarCard from "../components/CarCard";
import carsData from "../data/cars.json";
import { cn } from "../lib/utils";

const ITEMS_PER_PAGE = 6;

const cities = [
  { name: "All Cities", value: "all" },
  { name: "Casablanca", value: "casablanca" },
  { name: "Marrakech", value: "marrakech" },
  { name: "Rabat", value: "rabat" },
  { name: "Tangier", value: "tangier" },
];

export default function Cars() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const cityFilter = searchParams.get("city") || "all";

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, cityFilter]);

  const filteredCars = useMemo(() => {
    return carsData.filter((car) => {
      const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCity = cityFilter === "all" || car.city.toLowerCase() === cityFilter.toLowerCase();
      return matchesSearch && matchesCity;
    });
  }, [searchTerm, cityFilter]);

  const totalPages = Math.ceil(filteredCars.length / ITEMS_PER_PAGE);
  const paginatedCars = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredCars.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredCars, currentPage]);

  const handleCityChange = (city) => {
    if (city === "all") {
      searchParams.delete("city");
    } else {
      searchParams.set("city", city);
    }
    setSearchParams(searchParams);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Fleet</h1>
          <p className="text-muted-foreground">
            Explore our extensive range of premium vehicles. Use the filters to find 
            the perfect match for your journey.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12 items-center justify-between bg-card p-6 rounded-3xl border border-border/50 shadow-xl">
          <div className="relative w-full lg:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5 group-focus-within:text-primary transition-colors" />
            <input
              type="text"
              placeholder="Search by car name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-2xl py-3 pl-12 pr-4 outline-none transition-all"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {cities.map((city) => (
              <button
                key={city.value}
                onClick={() => handleCityChange(city.value)}
                className={cn(
                  "px-5 py-2.5 rounded-xl font-semibold text-sm transition-all",
                  cityFilter === city.value
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {city.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Grid */}
        {paginatedCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {paginatedCars.map((car, index) => (
                <motion.div
                  key={car.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <CarCard car={car} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-20 bg-muted/20 rounded-3xl border border-dashed border-border">
            <div className="inline-block p-4 bg-muted rounded-full mb-4">
              <Search size={32} className="text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">No cars found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filters to find what you're looking for.
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-16">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-3 rounded-xl bg-muted hover:bg-muted/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft />
            </button>
            
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={cn(
                    "w-12 h-12 rounded-xl font-bold transition-all",
                    currentPage === i + 1
                      ? "bg-primary text-white"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  )}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-3 rounded-xl bg-muted hover:bg-muted/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight />
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
