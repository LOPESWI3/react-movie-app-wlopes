import { ListItem } from "../list-item/ListItem";
import { IMAGE_URL } from "../../config/api_config";

export const Card = ({ query, type, navigation }) => {
    return (
      <ListItem
        id={query.id}
        popularity={query.popularity}
        search_type={type}
        title={query.original_title ? query.original_title : query.name }
        releaseDate={query.release_date? query.release_date : query.first_air_date}
        uri={`${IMAGE_URL}/${query.poster_path}`}
        onItemInfo={() => {
          navigation.navigate('details', {
            itemId: query?.id,
            itemType: type,
            itemName: query.name,
          });
        }}
      />
    );
  };
  