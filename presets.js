[
    {
        "name":"AlbedoBase XL",
        "comment":"Balance between speed and quality",
        "sample":"https://github.com/S1D1T1/image-presets/blob/main/samples/AlbedoBase-XL.png",
        "settings":
        {
          "model" : "albedobasexl_v21_f16.ckpt",
          "loras" : [
            {
              "file" : "tcd_sd_xl_base_1.0_lora_f16.ckpt",
              "weight" : 1
            }
          ],
          "sampler" : "TCD",
          "steps" : 8,
          "guidance_scale" : 1.1,
        }           
    },
    {
        "name": "Lightning Basic",
        "settings": {
            "guidance_scale": 1.5,
            "sampler": "DPM++ SDE Karras",
            "steps": 5
        }
    },
    {
        "name": "Turbo Basic",
        "settings": {
            "guidance_scale": 1,
            "sampler": "DPM++ SDE Karras",
            "steps": 6
        }
    },
    {
        "name": "Chronos",
        "settings": {
            "guidance_scale": 7,
            "model": "chronos_v10",
            "sampler": "Euler a",
            "steps": 30
        }
    },
    {
        "name": "Juggernaut 1kx1k",
        "settings": {
            "guidance_scale": 2,
            "model": "Juggernaut XL v9 Lightning",
            "sampler": "DPM++ 2M Karras",
            "size": "1024x1024",
            "steps": 6
        }
    },
    {
        "name": "Juggernaut lightning 4 step / 7sec",
        "settings": {
            "guidance_scale": 1.7,
            "hires_fix": false,
            "model": "Juggernaut XL v9 Lightning",
            "original_height": 768,
            "original_width": 768,
            "sampler": "TCD",
            "size": "768x768",
            "steps": 4,
            "target_height": 768,
            "target_width": 768
        }
    },
    {
        "name": "Juggernaut Hyper 7 step",
        "settings": {
            "guidance_scale": 1.4,
            "loras": [
                {
                    "file": "hyper_sdxl_2step_lora_f16.ckpt",
                    "weight": 0.6
                }
            ],
            "model": "Juggernaut XL v9",
            "sampler": "DPM++ SDE Substep",
            "size": "768x768",
            "steps": 7
        }
    },
    {
        "name": "Juggernaut Lightning 8 Step",
        "settings": {
            "guidance_scale": 1.7,
            "model": "Juggernaut XL v9 Lightning",
            "sampler": "TCD",
            "size": "768x768",
            "steps": 8
        }
    },
    {
        "name": "Juggernaut Fast",
        "sample":"https://github.com/S1D1T1/image-presets/blob/main/samples/juggernaut-fast.png"
        "settings": {
            "guidance_scale": 1.4,
            "model": "Juggernaut XL v9 Lightning",
            "sampler": "TCD",
            "size": "768x768",
            "steps": 9
        }
    },
    {
        "name": "PicX Real",
        "settings": {
            "guidance_scale": 5,
            "model": "picxReal_10",
            "sampler": "DPM++ 2M Karras",
            "steps": 24
        }
    },
    {
        "name": "RealVis",
        "settings": {
            "guidance_scale": 7,
            "model": "realvisxlV40_v40LightningBakedvae",
            "sampler": "DPM++ 2M Karras",
            "steps": 25
        }
    },
    {
        "name": "SD Turbo",
        "settings": {
            "guidance_scale": 0.9,
            "height": 512,
            "hires_fix": false,
            "model": "sd_turbo_f16.ckpt",
            "sampler": "DPM++ 2M Karras",
            "seed_mode": "Scale Alike",
            "steps": 2,
            "width": 512
        }
    }
]
