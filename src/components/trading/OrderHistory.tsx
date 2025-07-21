import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { History, TrendingUp, TrendingDown } from "lucide-react";

export const OrderHistory = () => {
  const mockOrders = [
    {
      id: "1703876543210",
      symbol: "BTCUSDT",
      side: "BUY",
      type: "MARKET",
      quantity: "0.023",
      price: "43,189.50",
      status: "FILLED",
      time: "14:32:15",
      pnl: "+45.67"
    },
    {
      id: "1703876543109",
      symbol: "ETHUSDT",
      side: "SELL",
      type: "LIMIT",
      quantity: "0.845",
      price: "2,534.80",
      status: "FILLED",
      time: "14:28:42",
      pnl: "-12.34"
    },
    {
      id: "1703876543008",
      symbol: "BTCUSDT",
      side: "BUY",
      type: "LIMIT",
      quantity: "0.010",
      price: "42,950.00",
      status: "CANCELLED",
      time: "14:15:33",
      pnl: "0.00"
    },
    {
      id: "1703876542907",
      symbol: "SOLUSDT",
      side: "SELL",
      type: "MARKET",
      quantity: "25.000",
      price: "98.45",
      status: "FILLED",
      time: "13:58:21",
      pnl: "+67.89"
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "FILLED":
        return <Badge className="bg-success">Filled</Badge>;
      case "CANCELLED":
        return <Badge variant="secondary">Cancelled</Badge>;
      case "PENDING":
        return <Badge variant="outline">Pending</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getSideBadge = (side: string) => {
    return side === "BUY" ? (
      <Badge className="bg-bull text-bull-foreground">BUY</Badge>
    ) : (
      <Badge className="bg-bear text-bear-foreground">SELL</Badge>
    );
  };

  const getPnlDisplay = (pnl: string) => {
    const isPositive = pnl.startsWith("+");
    const isNegative = pnl.startsWith("-");
    
    if (pnl === "0.00") return <span className="text-muted-foreground">$0.00</span>;
    
    return (
      <div className={`flex items-center space-x-1 ${isPositive ? 'text-bull' : isNegative ? 'text-bear' : 'text-muted-foreground'}`}>
        {isPositive && <TrendingUp className="h-3 w-3" />}
        {isNegative && <TrendingDown className="h-3 w-3" />}
        <span className="text-sm font-medium">${pnl}</span>
      </div>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <History className="h-5 w-5" />
          <span>Order History</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-80">
          <div className="space-y-4">
            {mockOrders.map((order) => (
              <div key={order.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{order.symbol}</span>
                    {getSideBadge(order.side)}
                    <Badge variant="outline" className="text-xs">{order.type}</Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusBadge(order.status)}
                    <span className="text-xs text-muted-foreground">{order.time}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Quantity:</span>
                    <br />
                    <span className="font-medium">{order.quantity}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Price:</span>
                    <br />
                    <span className="font-medium">${order.price}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">P&L:</span>
                    <br />
                    {getPnlDisplay(order.pnl)}
                  </div>
                </div>
                
                <div className="text-xs text-muted-foreground">
                  Order ID: {order.id}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};