import '../styles/BtnAjoutRessource.scss';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export default function BtnAjoutRessource() {
  return (
    <button className="BtnAjoutRessource">
      <Fab className="ajout" color="primary" aria-label="add">
        <AddIcon></AddIcon>
      </Fab>
    </button>
  );
}