import { TvType } from "../types/tvTypes";

type MovieCardProps = {
    tv: TvType;
};

/*
* Questo componente rappresenta una card di una serie TV
* @param {MovieCardProps} props - Le props del componente
* 
* @returns {JSX.Element} - Il componente React che rappresenta la card di un film
*/

export const TvCard = ({ tv }: MovieCardProps) => {
    return (
        <>
            <div style={{ backgroundColor: '#5555ff', borderRadius: '10px', padding: '10px', fontSize: '14px', margin: '30px' }}>
                <h1>{tv.name}</h1>
                <h3>({tv.id})</h3>
            </div>
        </>
    );
}
