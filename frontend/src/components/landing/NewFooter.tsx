import Logo from "@/components/landing/Logo"
import { footerData } from "@/constants"

const NewFooter = () => {
  return (
    <footer className="section !pb-0">
        <div className="container">
            <div className="grid grid-cols-1 gap-x-2 gap-y-10 lg:grid-cols-4">
                <Logo />

                <div className="grid grid-cols-2 gap-x-2 gap-y-8 text-sm sm:grid-cols-4 lg:col-span-3">
                    {footerData.links.map(({title, items}, index) => (
                        <ul key={index}>
                            <p className="mb-4 text-white">{title}</p>

                            {items.map(({href, label},index) => (
                                <li key={index} className="text-muted-foreground">
                                    <a href={href} className="inline-blockpy-1 transition-colors hover:text-primary">
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>

            <div className="flex justify-between mt-12 border-t border-gray-600/10 py-6">
                    <a href="" className="">
                        {footerData.copyright}
                    </a>

            </div>
        </div>
    </footer>
  )
}

export default NewFooter