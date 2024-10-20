

interface CardProps {
  css? : string;
  children : React.ReactNode;
}

export default function Card({css, children} : CardProps){
  return (
    <section className={`${css} bg`}>
      {children}
    </section>
  )
}