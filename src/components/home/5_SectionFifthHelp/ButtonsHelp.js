import React, {useState} from "react";
import { Pagination } from "./Pagination";
import { informations } from './informations';
import ButtonsHelpInfo from './ButtonsHelpInfo';

const ButtonsHelp = () => {
    const itemsPerPage = 3;
    const calculateItemsToShow = (items, page) => items.slice(page * itemsPerPage - itemsPerPage, page * itemsPerPage)

    const [currentSection, setCurrentSection] = useState(informations.foundation);
    const [chosenPage, setChosenPage] = useState(1);
    const [itemsToShow, setItemsToShow] = useState(calculateItemsToShow(currentSection.items, chosenPage));

    const handleClick = key => {
        setCurrentSection(informations[key]);
        setChosenPage(1);
        setItemsToShow(calculateItemsToShow(informations[key].items, 1));
    };

    const handlePaginate = page => {
        setChosenPage(page);
        setItemsToShow(calculateItemsToShow(currentSection.items, page));
    };

    return (
        <>
            <div className="article-buttons-change">
                <button onClick={() => handleClick('foundation')} className="art-button-change">Fundacjom </button>
                <button onClick={() => handleClick('organization')}  className="art-button-change">Organizacjom pozarządowym </button>
                <button onClick={() => handleClick('local')} className="art-button-change">Lokalnym zbiórkom</button>
            </div>
            <h2 className="article-head">
                <p className="info-goal">{currentSection.desc}</p>
            </h2>

            <div className="article-content">
            <ul>
                {itemsToShow.map(
                    ({title, info, things, ID}) => (<ButtonsHelpInfo
                        key={ID}
                        title={title}
                        info={info}
                        things={things}
                    >
                    </ButtonsHelpInfo>))
                }
            </ul>
            </div>
            <Pagination itemsPerPage={itemsPerPage} items={currentSection.items} onPaginate={handlePaginate} />
        </>
    )

};
export default ButtonsHelp;