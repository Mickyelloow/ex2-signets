import '../styles/Entete.scss';
import avatar from '../images/icon_secret.png';
import Avatar from '@material-ui/core/Avatar';

export default function Entete() {
  return (
    <header className="Entete">
      <div className="logo">Signets</div>
      <div className="avatar">
        Mickyelloow <Avatar alt="Mickyelloow" src={avatar} />
      </div>
    </header>
  );
}