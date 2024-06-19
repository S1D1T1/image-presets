# image-presets
Known, good-enough, starting settings for Image Generation

Back when I played synthesizers, I'd program patches to my liking, but rarely developed them from scratch. You'd get a keyboard, and use the built-in patches as a starting point. We need a starter patch library.

I feel that a "presets" layer is crucial to making Image Generation more accessible to new users, and more productive for advanced ones. We're all still mostly dealing with bare metal when there should be an abstraction layer - to mix metaphors.

These presets are written as sparse json, not specifying every parameter, and relying on the parameters we don't specify to be "neutral". This may prove naïve. For instance, when trying a Basic Lightning preset, one may get poor results due to leftover settings from a previous image, such as clip_skip, or a stray lora. in that case it may be worth defining "neutral" with a base layer, which the preset rests upon.

Settings which name particular models or loras will not generally work off the shelf. Not until there's better standardization of model and lora names, ways to negotiate close matches, and inquire on availability. Until then, expect image requests to fail, requiring manual correction of model names, for your own installation. Presets which depend on particular resources may optionally specify a URL for those resources.

Not only are model names not standardized, neither are parameter names. This library is built around Draw Things' vocabulary.
(...  for the most part - width/height are notated as "size".)


## Possible Categories ##

SD 1.5  
SDXL  
Turbo, Hyper, Lightning  
SVD  
Stable Cascade  
Genres - Photorealistic, Anime, etc.  
Built for Speed  


## Using a Preset ##
A quick way is to import a sample image, if your tool can read its metadata. Many tools have a way to paste in json parameters.  
Otherwise ... additional tools may be needed. And interesting tools are possible - such as a Draw Things script or a MacOS Shortcut that presents the user with a menu of starting points, based on these presets. If you write that tool, let me know how to make the data easy to import.


## Standardization ##
Sample Images could use a standard prompt, or small set of prompts, with set seed value. This would better illustrate the characteristics of a given preset. Let's see what evolves.

## Contributing ##
Please submit your presets. Sample images encouraged. Must include metadata.

[more info to come]

## PromptWriter ##
My [MacOS image Client](https://discord.gg/Xz3B2rcAnu) will ship with a few presets from this repo, and will easily import any others.  

<img width="276" alt="Screenshot_2024-06-18_at_5 41 43_PM" src="https://github.com/S1D1T1/image-presets/assets/156350598/d90a3574-c2f1-41a5-8ab0-43f6a30d73b3">
