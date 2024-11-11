import { PersonType } from "../types/personTypes";

type MovieCardProps = {
    person: PersonType;
};

/*
* Questo componente rappresenta una card di un attore
* @param {MovieCardProps} props - Le props del componente
* 
* @returns {JSX.Element} - Il componente React che rappresenta la card di un film
*/

export const PeopleCard = ({ person }: MovieCardProps) => {
    return (
        <>
            <div style={{ backgroundColor: '#55ff55', borderRadius: '10px', padding: '10px', fontSize: '14px', margin: '30px' }}>
                <h1>{person.name}</h1>
                <h3>({person.id})</h3>
            </div>
        </>
    );
}
