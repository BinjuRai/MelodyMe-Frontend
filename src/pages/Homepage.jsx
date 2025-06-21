
export default function Homepage() {
  return (
    <div className="min-h-screen">
      <section className="banner__section bg-white flex justify-between mt-14">
        <div className="heading text-cyan-700 mt-4">
            <h1>
              YOUR SPACE, YOUR PACE, <br/>
              YOUR PASSION.
            </h1>
            <div className="btn-wrap">
              <div>
                <a href="">Get Started</a>
              </div>
              <div>
                <a href="">Learn More</a>
              </div>
            </div>
        </div>
       <div className="bg-img object-cover text-right">
         <img src="src/assets/images/bannerimg1.png" alt="" />
        </div>
      </section>
    
    </div>
  )
}
