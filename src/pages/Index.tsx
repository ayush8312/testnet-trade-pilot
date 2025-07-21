import { TradingHeader } from "@/components/trading/TradingHeader";
import { OrderForm } from "@/components/trading/OrderForm";
import { OrderHistory } from "@/components/trading/OrderHistory";
import { Portfolio } from "@/components/trading/Portfolio";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <TradingHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <OrderForm />
          </div>
          
          <div className="lg:col-span-2 space-y-6">
            <Portfolio />
            <OrderHistory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
