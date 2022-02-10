import PropTypes from 'prop-types';
import '../styles/Pokemon.scss';

export function Pokemon(props) {
  const {
    pokemon: { name, type, averageWeight, image },
  } = props;
  const averageAge = `Average Weight: ${averageWeight.value} ${averageWeight.measurementUnit} `;

  return (
    <>
      <section className="section-pokemon">
        <ul>
          <li>{name}</li>
          <li>{type}</li>
          <li>{averageAge}</li>
        </ul>
        <img src={image} alt={`Imagem do pokemon ${name}`} />
      </section>
    </>
  );
}

/* TIPAGEM NATIVA DO REACT */
Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
  }),
};
