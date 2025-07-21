import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";

export const TradingHeader = () => {
  const mockData = {
    symbol: "BTCUSDT",
    price: "43,247.50",
    change: "+2.35%",
    changeValue: "+991.20",
    isPositive: true,
    high24h: "44,123.80",
    low24h: "41,892.30",
    volume: "1,234,567 BTC"
  };

  return (
    <Card className="p-6 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-3xl font-bold">{mockData.symbol}</h1>
          <Badge variant="secondary" className="text-xs">
            TESTNET
          </Badge>
        </div>
        
        <div className="flex items-center space-x-8">
          <div className="text-right">
            <div className="text-2xl font-bold">${mockData.price}</div>
            <div className={`flex items-center space-x-1 ${mockData.isPositive ? 'text-bull' : 'text-bear'}`}>
              {mockData.isPositive ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
              <span className="text-sm font-medium">
                {mockData.changeValue} ({mockData.change})
              </span>
            </div>
          </div>
          
          <div className="space-y-1 text-sm text-muted-foreground">
            <div>24h High: <span className="text-foreground">${mockData.high24h}</span></div>
            <div>24h Low: <span className="text-foreground">${mockData.low24h}</span></div>
            <div>24h Volume: <span className="text-foreground">{mockData.volume}</span></div>
          </div>
        </div>
      </div>
    </Card>
  );
};