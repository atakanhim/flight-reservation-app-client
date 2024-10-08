import CardList from '../components/HomePageComponents/Card/CardList'
import HomePageMain from '../components/HomePageComponents/HomePageMain'


export default function HomePage() {
    return (
        <div className="flex flex-col 2xl:grid min-h-[770px]  2xl:grid-cols-[minmax(600px,1fr),200px] gap-4">
            <div className='pt-4 '>
                <HomePageMain />
            </div>
            <div className='w-full 2xl:w-[200px]'>
                <CardList />
            </div>
        </div>

    )
}


