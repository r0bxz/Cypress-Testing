import Link from "next/link"

export default function NavItem({label,path,testdata}){
    return (
        <Link test-data ={testdata} href={path}>
            {label}
        </Link>
    )
}