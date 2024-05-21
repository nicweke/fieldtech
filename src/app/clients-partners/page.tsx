import { Metadata } from "next";
import { ClientPage } from "@/components/client-page";

export const metadata: Metadata = {
  title: "Client and Partners",
};

const Clients = () => {
  return <ClientPage />;
};

export default Clients;
