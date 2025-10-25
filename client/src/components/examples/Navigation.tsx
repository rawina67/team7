import Navigation from '../Navigation';
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";

export default function NavigationExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen">
        <Navigation />
        <div className="p-8">
          <p className="text-muted-foreground">Navigation component displayed above</p>
        </div>
      </div>
    </QueryClientProvider>
  );
}
