import { IWidget } from "@types"
import PlaceHolderWidget from "src/core/components/widgets-bar/PlaceHolderWidget"
import Chance from "chance"
const generateRandomWidgets = (count, appId?): IWidget[] => {
  let chance = new Chance()

  let randomWidgets: IWidget[] = []

  for (let i = 1; i <= count; i++) {
    randomWidgets.push({
      name: chance.name({}),
      description: chance.sentence({ words: 16 }),
      multiSized: chance.bool({ likelihood: 90 }),
      appId,
      component: PlaceHolderWidget,
    })
  }

  return randomWidgets
}

export { generateRandomWidgets }
