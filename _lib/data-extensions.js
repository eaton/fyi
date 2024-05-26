import { Json5, Yaml, Csv, Tsv, NdJson } from '@eatonfyi/serializers'
import { unflatten } from 'obby';

export default {
  'yml, yaml': new Yaml().parse,
  'json5': new Json5().parse,
  'ndjson': new NdJson().parse,
  'csv': (content) => new Csv().parse(content).map(o => unflatten(o)),
  'tsv': (content) => new Tsv().parse(content).map(o => unflatten(o)),
}
