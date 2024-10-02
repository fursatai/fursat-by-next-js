import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href={"/"}>
            <Image
                src={"/logo.jpeg"}
                alt="brands in nature logo"
                width={120}
                height={35}
                className="flex-shrink-0"
            />
        </Link>
    );
}