// export default function Header(){
//     return(
//        <Header className="w-full bg-accent">
//        </Header>
//     )
// }


import alumexLogo from "../assets/alumex-logo.png";

export default function Header() {

    return (

        <header className="w-full h-16 bg-green-200 border-b border-green-200 flex items-center px-4 sm:px-6 md:px-8">
            <img
                src={alumexLogo}
                alt="Alumex"
                className="h-10 w-auto object-contain"
            />

        </header>

    );

}