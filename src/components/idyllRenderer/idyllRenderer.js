import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Chart from "../chart";
import * as components from "../idyll-rn-components/src";
import IdyllDocument from "../idyll-rn-document/src";
import NoData from "../noData";

const markup = `
# Title h1
## Title h2
### Title h3
#### Title h4
##### Title h5
###### Title h6

 Body text 

 **bold** **bold** **bold**




[var name:"myVar" value:0 /]

[button onClick:\`myVar += 1\`]Click Me![/button]

[Display value:myVar /]

[var name:"myVar" value:10 /]

[Range value:voltage min:0 max:100 /]

[Display value:voltage /]

**unordered list**

* list Item 
* list Item 
* list Item 

**ordered list**

1. list Item 
2. list Item 
3. list Item 

[var name:"drag" value:1 /]


[var name:"checkVar" value:false /]

[Boolean value:checkVar /]

Checkbox :

[Display value:\` checkVar ? "is checked." : "isn't checked." \`/]

[Dynamic value:drag /]


[var name:"func" value:\`Math.sin\` /]
[var name:"domainStart" value:0 /]
[var name:"domainEnd" value:\`2 * Math.PI\` /]

[Chart
  equation:\` (t) => func(t)\`
  domain:\`[domainStart, domainEnd]\`
  samplePoints:1000 /]

[Button onClick:\`func = Math.sin\`]sin[/Button]
[Button onClick:\`func = Math.cos\`]cos[/Button]

// [Range value:domainStart min:0 max:0 step:0.01  /]

// [Range value:domainEnd min:0 max:\`4 * Math.PI\` step:0.01  /]


[IdyllImage src:"https://www.nappy.co/wp-content/uploads/2017/08/2017-07-03-06.31.35-Edit.jpg" /]
`;
const IdyllRenderer = () => {
  return (
    <View>
      <IdyllDocument components={{ ...components, NoData }} markup={markup} />
    </View>
  );
};

export default IdyllRenderer;

const styles = StyleSheet.create({});
