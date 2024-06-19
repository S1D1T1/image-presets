# image-presets
Known, good-enough, settings for Image Generation

Back when I played synthesizers, I'd program patches to my liking, but rarely developed them from scratch. You'd get a keyboard, and use the built-in patches as a starting point. We need a starter patch library.

I feel that a "presets" layer is crucial to making Image Generation more accessible to new users, and more productive for advanced ones. We're all still mostly dealing with bare metal when there should be an abstraction layer, to mix metaphors.

These presets are written as sparse json. We're not specifying every parameter, and relying on the parameters we don't specify to be "neutral". This may prove naïve. For instance, when trying a Basic Lightning preset, one may get poor results due to leftover settings from a previous image, such as clip_skip, or a stray lora. in that case it may be worth defining "neutral" with a base layer, which the preset rests upon.

Settings which name particular models or loras will not generally work off the shelf. Not until there's better standardization of model and lora names, ways to negotiate close matches, and inquire on availability. Until then, expect image requests to fail, requiring manual correction of model names, for your own installation.

Not only are model names not standardized, neither are parameter (or "key") names. This library is built around Draw Things' vocabulary.
(...  for the most part - width/height are notated as "size".)


## Possible Categories ##

SD 1.5  
SDXL  
Turbo, Hyper, Lightning  
SVD  
Stable Cascade  
Genres - Photorealistic, Anime, etc.  
Built for Speed  


## Standardization ##
A standard prompt could be used, or small set of prompts, with set seed value for sample images. This would better isolate the characteristics of a given preset.

## Contributing ##
Sample images encouraged. Must include metadata.

[tbd]
