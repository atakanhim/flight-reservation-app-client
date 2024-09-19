import CardList from '../components/HomePageComponents/Card/CardList'
import HomePageMain from '../components/HomePageComponents/HomePageMain'


export default function HomePage() {
    return (
        <div className=" grid grid-cols-[minmax(600px,1fr),200px] gap-4">
            <div className='pt-4 '>
                <HomePageMain />
            </div>
            <div className='w-[200px]'>
                <CardList />
            </div>
        </div>

    )
}


