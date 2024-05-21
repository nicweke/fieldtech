import Link from "next/link";

export const HeaderLogo = () => {
  return (
    <aside>
      <Link href="/" className="font-semibold flex z-30">
        <span>Fieldtech Systems (K) Limited.</span>
      </Link>
    </aside>
  );
};
