import { Json5, Yaml, Csv, Tsv, NdJson } from '@eatonfyi/serializers'
import { unflatten } from 'obby';

export default {
  'yml, yaml': (content) => new Yaml().parse(content),
  'json5': (content) => new Json5().parse,
  'ndjson': (content) => new NdJson().parse(content),
  'csv': (content) => new Csv().parse(content).map(o => unflatten(o)),
  'tsv': (content) => new Tsv().parse(content).map(o => unflatten(o)),
}
