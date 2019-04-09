import JSZip from 'jszip'
import { saveAs } from 'file-saver'

const functionsRequire = require.context('!!raw-loader!~/assets/datapackFunctions', true, /.mcfunction$/)
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

    const basePath = 'data/'
    const minecraftPath = basePath + 'minecraft/'
    const functionsPath = basePath + `${datapackName}/functions/`

    for (const [basePath, req] of [[minecraftPath, minecraftRequire], [functionsPath, functionsRequire]]) {
      for (let path of req.keys()) {
        const initialText = req(path)
        let text = JSON.stringify(initialText, null, 2)

        text = text
          .replace(/{datapackName}/g, datapackName)
          .replace(/{animatorName}/g, animatorName)
          .replace(/{animatorTag}/g, animatorTag)

        path = basePath + path.substring(2)
        zip.file(path, text, {})
      }
    }
    zip.file('pack.mcmeta', JSON.stringify({
      pack: {
        pack_format: 1,
        description: `${animatorName} for the Animation Creator datapack.`
      }
    }, null, 2))
    zip.generateAsync({ type: 'blob' })c
      .then(content => saveAs(content, animatorName))
  }
}

export default Datapack
