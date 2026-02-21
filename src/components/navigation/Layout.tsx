
export const Layout = ({children} : {children: React.ReactNode}) =>{
     return(
        <>

        <div>
            <h1 className="text-center text-2xl">hello tout le monde</h1>
            <main>{children}</main>
        </div>
      
        </>
     )
}
