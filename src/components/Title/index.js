export default function Title({ children, as }) {
    const Tag = as;
    return (
        <>
            <h1>
                {children}
            </h1>
            <style jsx>{`
                ${Tag} {
                   color: blue; 
                }
                `    }</style>
        </>
    )
}