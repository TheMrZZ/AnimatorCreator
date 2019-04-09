import JSZip from 'jszip'
import { saveAs } from 'file-saver'

const functionsRequire = require.context('raw-loader!~/assets/datapackFunctions', true)
const minecraftRequire = require.context('~/assets/datapackMinecraft', true, /\.json$/)

class Datapack {
  datapackName
  animatorName
  animatorTag

  constructor (datapackName, animatorName, animatorTag) {
    this.datapackName = datapackName
    this.animatorName = animatorName
    this.animatorTag = animatorTag
  }

  download () {
    let zip = new JSZip()
    const [datapackName, animatorName, animatorTag] = [this.datapackName, this.animatorName, this.animatorTag]

    const basePath = `${animatorName}/data/`
    const minecraftPath = basePath + 'minecraft/'
    const functionsPath = basePath + `${datapackName}/functions/`

    for (const [basePath, req, moduleToString] of [
      [minecraftPath, minecraftRequire, m => JSON.stringify(m, null, 2)],
      [functionsPath, functionsRequire, m => JSON.parse('"' + m.default.match(/export default "(.*)"/)[1] + '"')]]) {

      for (let path of req.keys()) {
        let text = moduleToString(req(path))

        text = text
          .replace(/{datapackName}/g, datapackName)
          .replace(/{animatorName}/g, animatorName)
          .replace(/{animatorTag}/g, animatorTag)

        path = basePath + path.substring(2)
        zip.file(path, text, {})
        console.log(path)
      }
    }

    zip.generateAsync({ type: 'blob' })
      .then(content => saveAs(content, animatorName))
  }
}

export default Datapack
