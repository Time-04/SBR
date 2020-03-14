import jsonFile from '../../../temp/data/DadosStartupBase.json';
import Enterprise from '../models/Enterprise';
import Badge from '../models/Badge';
import '../models/Segment';
import Segment from '../models/Segment';

class JsonDataBaseController {
  async store(req, res) {
    try {
      let tempData = [];
      if (jsonFile) {
        tempData = jsonFile.map(value => {
          const {
            id: startupbase_id,
            name,
            description,
            slug,
            is_verified,
            created_at,
            updated_at,
            employees,
            business_phase,
            uf,
            state,
            city,
            place,
            is_active,
            tags,
            segment,
          } = value;

          return {
            startupbase_id,
            name,
            description,
            slug,
            is_verified,
            created_at,
            updated_at,
            employees,
            business_phase,
            tags: tags.toString() || null,
            uf,
            state,
            city,
            place,
            segment,
            is_active,
          };
        });
      }

      const enterprises = await Enterprise.bulkCreate(tempData);
      const teste = enterprises.map(value => {
        const { id, startupbase_id } = value;

        return { id, startupbase_id };
      });

      const tempBadges = jsonFile.reduce((resultList, value) => {
        let badges = [];
        if (value.badges.length > 0) {
          const { id } = value;
          const result = teste.find(element => element.startupbase_id == id);

          const { id: enterprise_id } = result;
          const [{ name: badge_name, profile_image }] = value.badges;
          badges = [{ enterprise_id, badge_name, profile_image }];

          resultList.push(badges);
        }

        return resultList;
      }, []);

      const badges = await Badge.bulkCreate(tempBadges);
      console.log(badges);

      const tempSegments = jsonFile.reduce((resultList, value) => {
        if (value.segments) {
          const { id } = value;
          const result = teste.find(element => element.startupbase_id == id);

          const { id: enterprise_id } = result;
          const { primary, secondary } = value.segments;
          resultList.push({ enterprise_id, primary, secondary });
        }

        return resultList;
      }, []);

      const segments = await Segment.bulkCreate(tempSegments);

      console.log(segments);

      return res.status(200).json({ message: 'OK', data: enterprises });
    } catch (error) {
      return res.status(401).json({ message: error.message || error });
    }
  }
}

export default new JsonDataBaseController();
