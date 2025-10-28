import Footer from "@/src/components/footer";
import Header from "@/src/components/header";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className="min-h-[75vh]">{children}</div>
      <Footer />
    </div>
  );
}
