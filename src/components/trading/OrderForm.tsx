import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";

export const OrderForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    symbol: "BTCUSDT",
    orderType: "MARKET",
    quantity: "",
    price: "",
    side: "BUY"
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (side: "BUY" | "SELL") => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const mockOrderResponse = {
      orderId: `${Date.now()}`,
      symbol: formData.symbol,
      side,
      orderType: formData.orderType,
      quantity: formData.quantity,
      price: formData.orderType === "LIMIT" ? formData.price : "43,247.50",
      status: "FILLED",
      filledQty: formData.quantity,
      avgPrice: formData.orderType === "LIMIT" ? formData.price : "43,247.50"
    };

    toast({
      title: "Order Executed Successfully! 🎉",
      description: (
        <div className="space-y-2">
          <div>Order ID: <Badge variant="secondary">{mockOrderResponse.orderId}</Badge></div>
          <div>Side: <Badge variant={side === "BUY" ? "default" : "destructive"}>{side}</Badge></div>
          <div>Type: {mockOrderResponse.orderType}</div>
          <div>Filled: {mockOrderResponse.filledQty} @ ${mockOrderResponse.avgPrice}</div>
        </div>
      ),
    });

    setIsLoading(false);
    setFormData(prev => ({ ...prev, quantity: "", price: "" }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Send className="h-5 w-5" />
          <span>Place Order</span>
        </CardTitle>
        <CardDescription>
          Execute trades on Binance Futures Testnet
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="symbol">Symbol</Label>
            <Select value={formData.symbol} onValueChange={(value) => handleInputChange("symbol", value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="BTCUSDT">BTCUSDT</SelectItem>
                <SelectItem value="ETHUSDT">ETHUSDT</SelectItem>
                <SelectItem value="ADAUSDT">ADAUSDT</SelectItem>
                <SelectItem value="SOLUSDT">SOLUSDT</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="orderType">Order Type</Label>
            <Select value={formData.orderType} onValueChange={(value) => handleInputChange("orderType", value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="MARKET">Market</SelectItem>
                <SelectItem value="LIMIT">Limit</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="quantity">Quantity</Label>
          <Input
            id="quantity"
            type="number"
            placeholder="0.001"
            step="0.001"
            value={formData.quantity}
            onChange={(e) => handleInputChange("quantity", e.target.value)}
          />
        </div>

        {formData.orderType === "LIMIT" && (
          <div className="space-y-2">
            <Label htmlFor="price">Price (USDT)</Label>
            <Input
              id="price"
              type="number"
              placeholder="43,247.50"
              step="0.01"
              value={formData.price}
              onChange={(e) => handleInputChange("price", e.target.value)}
            />
          </div>
        )}

        <div className="grid grid-cols-2 gap-4 pt-4">
          <Button
            variant="default"
            className="bg-bull hover:bg-bull/90"
            onClick={() => handleSubmit("BUY")}
            disabled={isLoading || !formData.quantity}
          >
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "BUY"}
          </Button>
          
          <Button
            variant="destructive"
            className="bg-bear hover:bg-bear/90"
            onClick={() => handleSubmit("SELL")}
            disabled={isLoading || !formData.quantity}
          >
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "SELL"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};