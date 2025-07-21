import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wallet, TrendingUp, TrendingDown, DollarSign } from "lucide-react";

export const Portfolio = () => {
  const portfolioData = {
    totalBalance: "10,567.89",
    availableBalance: "8,234.56",
    unrealizedPnl: "+234.78",
    todayPnl: "+123.45",
    totalMargin: "2,333.33",
    marginRatio: "22.08%"
  };

  const positions = [
    {
      symbol: "BTCUSDT",
      side: "LONG",
      size: "0.045",
      entryPrice: "42,890.50",
      markPrice: "43,247.50",
      pnl: "+16.13",
      margin: "965.23"
    },
    {
      symbol: "ETHUSDT",
      side: "SHORT",
      size: "1.250",
      entryPrice: "2,545.80",
      markPrice: "2,534.90",
      pnl: "+13.63",
      margin: "1,367.89"
    }
  ];

  const getSideBadge = (side: string) => {
    return side === "LONG" ? (
      <Badge className="bg-bull text-bull-foreground">LONG</Badge>
    ) : (
      <Badge className="bg-bear text-bear-foreground">SHORT</Badge>
    );
  };

  const getPnlDisplay = (pnl: string) => {
    const isPositive = pnl.startsWith("+");
    return (
      <div className={`flex items-center space-x-1 ${isPositive ? 'text-bull' : 'text-bear'}`}>
        {isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
        <span className="text-sm font-medium">${pnl}</span>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Wallet className="h-5 w-5" />
            <span>Account Balance</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold">${portfolioData.totalBalance}</div>
              <div className="text-sm text-muted-foreground">Total Balance</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">${portfolioData.availableBalance}</div>
              <div className="text-sm text-muted-foreground">Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-bull">${portfolioData.unrealizedPnl}</div>
              <div className="text-sm text-muted-foreground">Unrealized P&L</div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-8 mt-6 pt-6 border-t">
            <div className="text-center">
              <div className="text-lg font-semibold text-bull">${portfolioData.todayPnl}</div>
              <div className="text-xs text-muted-foreground">Today's P&L</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold">${portfolioData.totalMargin}</div>
              <div className="text-xs text-muted-foreground">Total Margin</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold">{portfolioData.marginRatio}</div>
              <div className="text-xs text-muted-foreground">Margin Ratio</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <DollarSign className="h-5 w-5" />
            <span>Open Positions</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {positions.map((position, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{position.symbol}</span>
                    {getSideBadge(position.side)}
                  </div>
                  {getPnlDisplay(position.pnl)}
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Size:</span>
                    <br />
                    <span className="font-medium">{position.size}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Entry Price:</span>
                    <br />
                    <span className="font-medium">${position.entryPrice}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Mark Price:</span>
                    <br />
                    <span className="font-medium">${position.markPrice}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Margin:</span>
                    <br />
                    <span className="font-medium">${position.margin}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};