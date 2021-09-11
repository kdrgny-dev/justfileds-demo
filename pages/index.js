import Hero from '../components/Hero'
import useSWR from "swr";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import About from '../components/About';
import Achievements from '../components/Achievements';
import Team from '../components/Team';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
    const { data, error } = useSWR(
        "https://justfields.com/project/Doy374y8/json",
        fetcher
    );

    if (error) return "An error has occurred.";
    if (!data) return (
        <div className="d-flex align-items-center justify-content-center min-vh-100">
            <Player
                autoplay
                loop
                src="/lottie.json"
                style={{ height: '300px', width: '300px' }}
            >
                <Controls visible={false} />
            </Player>
        </div>
    );

    console.log('data', data);
  return (
    <div>
          <Hero data={data}/>
          <About data={data}/>
          <Achievements data={data} />
          <Team data={data} />
    </div>
  )
}
