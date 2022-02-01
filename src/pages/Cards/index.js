import axios from 'axios';
import { useEffect, useState } from 'react';
import { Modal } from '../../components/Modal';
import './styles.css';



const BASE_URL = 'https://kitsu.io/api/edge/trending/animes';


const Cards = () =>  {
	const [anime, setAnime] = useState([]);
	const [showModal, setShowModal] = useState(false)

	const openModal = () => {
		setShowModal((prev) => !prev)
		
		
	}
	// const targetEvent = document.addEventListener('click', openModal)

    // console.log(targetEvent)

  useEffect(() => {
    const res = axios(BASE_URL)
      .then(response => { 
        
        const data = response.data
        let listContent = []
        setAnime(
			listContent = data.data.map((animes) => {
            const { id, type, attributes } = animes;
            
            return {
              id: id,
              type: type,
              description: attributes.description,
              canonicalTitle: attributes.canonicalTitle,
              posterImage: attributes.posterImage.medium,
            };
          })

        )

      })
  }, []);

  	
  
  
	
	// <div className="firedev-cards-content">
	// 		<Modal
	// 		 showModal={showModal}
	// 		 setShowModal={setShowModal}
	// 		/>
	// 	<div>
	// 		<img className='anime-images' src={image} alt={title} onClick={openModal}/>
	// 	</div>
	// 	<div>
	// 		<p>{title}</p>				
	// 	</div>
	// </div>

	

	return (
		<>
			
		<div className='container-card-list'>
			{anime.map(animes => {
				
				
    			const { id, canonicalTitle, posterImage } = animes
    
				return (
					
				<>
					<div key={id} className="firedev-cards-content" >
						
						<div >
							<img  id="img" className='anime-images'  src={posterImage} alt={canonicalTitle} onClick={openModal}/>
						</div>
						<div>
							<p>{canonicalTitle}</p>				
						</div>
						
					</div>
					<Modal
						showModal={showModal}
						setShowModal={setShowModal}
					/> 
				</>
				)
				
			})
			
			}
			
		</div>
		
		
		
		</>
	)

}


export default Cards;
