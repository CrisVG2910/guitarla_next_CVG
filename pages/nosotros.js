import Image from "next/image"
import Layout from "../components/layout"
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout
      title={'Nosotros'}
      description="Sobre nosotros, guitarLA, tienda de música"
    >
     
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>

        <div className={styles.contenido}>
          <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros" />

          <div>
            <p>
            Morbi euismod ultrices tellus eu tempus. Donec euismod lacinia neque, sed vestibulum dolor sollicitudin ut. Integer est diam, tempus sit amet lorem eu, 
            ultricies lobortis felis. Maecenas dapibus augue eget ligula convallis vehicula. Nam massa lacus, vulputate et ipsum eu, varius auctor dui. 
            Cras tincidunt orci sed metus varius vehicula. Sed venenatis dolor vitae mollis pretium. Phasellus ut ex ac dolor iaculis volutpat ut et mi. In maximus, 
            lacus eget gravida mollis, nibh turpis condimentum nibh, id sodales dui augue sit amet turpis. 
            Cras volutpat tristique purus, laoreet lobortis lacus feugiat rhoncus. Vivamus quis sapien et odio fermentum hendrerit ac quis leo. 
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}
