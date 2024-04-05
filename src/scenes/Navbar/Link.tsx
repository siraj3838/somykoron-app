import { selectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
    selectedPage: selectedPage;
    setSelectedPage: (value: selectedPage) => void; 
}

const Link = ({
    page,
    selectedPage,
    setSelectedPage,
}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as selectedPage
    
  return (
    <AnchorLink 
    href={`#${lowerCasePage}`}
    className={`${selectedPage === lowerCasePage ? 'text-primary-500' : ''} transition duration-500 hover:text-primary-300`}
    onClick={() => setSelectedPage(lowerCasePage)}
    >
        {page}
    </AnchorLink>
  )
}

export default Link