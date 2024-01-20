import React from 'react'
import SimpleCard from '../components/simpleCard'
import cinema from '../icons/cinema.png'
import games from '../icons/games.png'
import book from '../icons/open-book.png'
import phone from '../icons/smartphone.png'
import sound from '../icons/sound.png'
import store from '../icons/store.png'

function Carduse() {
    return (
        <div id='main-feature' class="w-full p-4 text-center my-2 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Recommender Engine
                That Drives You Forward</h5>
            <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Explore feature-rich Recommender & Search solution tailored for your unique use case..</p>

            <div className="flex flex-wrap justify-evenly gap-4 p-4">
                <SimpleCard link='/movie' isrc={cinema} ialt='cinema' name='Movie'></SimpleCard>
                <SimpleCard link='/book' isrc={book} ialt='Book' name='Book'></SimpleCard>
                <SimpleCard link='/music' isrc={sound} ialt='Music' name='Music'></SimpleCard>
                <SimpleCard link='games' isrc={games} ialt='Games' name='Games'></SimpleCard>
                <SimpleCard link='store' isrc={store} ialt='Store' name='Store'></SimpleCard>
                <SimpleCard link='phone' isrc={phone} ialt='Application' name='Others'></SimpleCard>
            </div>
        </div>
    )
}

export default Carduse

