import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const ValueCard = () => {
  return (
    <Card className="border-purple-800 border-4 shadow-lg">
      <CardHeader>
        <h1 className="font-semibold text-lg"></h1>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default ValueCard;
