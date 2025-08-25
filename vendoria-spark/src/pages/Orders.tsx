import React from "react";
import { useState } from "react";
import { Package, Truck, CheckCircle, Clock, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Order {
  id: string;
  date: string;
  status: "pending" | "processing" | "shipped" | "delivered";
  total: number;
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }>;
}

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem("orders");
    if (saved) return JSON.parse(saved);
    return [
      {
        id: "ORD-2024-001",
        date: "2024-01-15",
        status: "delivered",
        total: 299.99,
        items: [
          {
            id: "1",
            name: "Premium Wireless Headphones",
            price: 299.99,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop&crop=center"
          }
        ]
      },
      {
        id: "ORD-2024-002",
        date: "2024-01-10",
        status: "shipped",
        total: 125.98,
        items: [
          {
            id: "3",
            name: "Minimalist Leather Wallet",
            price: 79.99,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100&h=100&fit=crop&crop=center"
          },
          {
            id: "4",
            name: "Ceramic Coffee Mug Set",
            price: 45.99,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=100&h=100&fit=crop&crop=center"
          }
        ]
      },
      {
        id: "ORD-2024-003",
        date: "2024-01-08",
        status: "processing",
        total: 89.99,
        items: [
          {
            id: "9",
            name: "Bluetooth Speaker",
            price: 89.99,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=100&h=100&fit=crop&crop=center"
          }
        ]
      }
    ];
  });

  React.useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="w-4 h-4" />;
      case "processing":
        return <Package className="w-4 h-4" />;
      case "shipped":
        return <Truck className="w-4 h-4" />;
      case "delivered":
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "secondary";
      case "processing":
        return "default";
      case "shipped":
        return "outline";
      case "delivered":
        return "secondary";
      default:
        return "secondary";
    }
  };

  const filterOrdersByStatus = (status?: string) => {
    if (!status || status === "all") return orders;
    return orders.filter(order => order.status === status);
  };

  return (
    <div className="container-custom py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Order History
          </h1>
          <p className="text-lg text-muted-foreground">
            Track and manage your orders
          </p>
        </div>

        {/* Order Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Package className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-foreground">{orders.length}</div>
                <p className="text-sm text-muted-foreground">Total Orders</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-500" />
                <div className="text-2xl font-bold text-foreground">
                  {filterOrdersByStatus("delivered").length}
                </div>
                <p className="text-sm text-muted-foreground">Delivered</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Truck className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                <div className="text-2xl font-bold text-foreground">
                  {filterOrdersByStatus("shipped").length}
                </div>
                <p className="text-sm text-muted-foreground">Shipped</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Clock className="w-8 h-8 mx-auto mb-2 text-orange-500" />
                <div className="text-2xl font-bold text-foreground">
                  {filterOrdersByStatus("processing").length + filterOrdersByStatus("pending").length}
                </div>
                <p className="text-sm text-muted-foreground">In Progress</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Orders List */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">All Orders</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="processing">Processing</TabsTrigger>
            <TabsTrigger value="shipped">Shipped</TabsTrigger>
            <TabsTrigger value="delivered">Delivered</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {orders.map((order) => (
              <Card key={order.id}>
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-lg">{order.id}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Ordered on {new Date(order.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant={getStatusColor(order.status)} className="capitalize">
                        {getStatusIcon(order.status)}
                        <span className="ml-1">{order.status}</span>
                      </Badge>
                      <div className="text-right">
                        <p className="font-semibold">${order.total.toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <p className="font-medium text-foreground">{item.name}</p>
                          <p className="text-sm text-muted-foreground">
                            Qty: {item.quantity} × ${item.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end mt-4">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {["pending", "processing", "shipped", "delivered"].map((status) => (
            <TabsContent key={status} value={status} className="space-y-4">
              {filterOrdersByStatus(status).length === 0 ? (
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Package className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground">No {status} orders found</p>
                  </CardContent>
                </Card>
              ) : (
                filterOrdersByStatus(status).map((order) => (
                  <Card key={order.id}>
                    <CardHeader className="pb-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <CardTitle className="text-lg">{order.id}</CardTitle>
                          <p className="text-sm text-muted-foreground">
                            Ordered on {new Date(order.date).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <Badge variant={getStatusColor(order.status)} className="capitalize">
                            {getStatusIcon(order.status)}
                            <span className="ml-1">{order.status}</span>
                          </Badge>
                          <div className="text-right">
                            <p className="font-semibold">${order.total.toFixed(2)}</p>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {order.items.map((item) => (
                          <div key={item.id} className="flex items-center gap-4">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div className="flex-1">
                              <p className="font-medium text-foreground">{item.name}</p>
                              <p className="text-sm text-muted-foreground">
                                Qty: {item.quantity} × ${item.price.toFixed(2)}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-end mt-4">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Orders;