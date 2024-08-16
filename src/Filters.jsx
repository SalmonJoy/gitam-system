import React, { useState } from 'react'

export default function Filters() {


    const [subjects, setSubjects] = useState([
        {
            id: 1,
            name: "Strength of Materials"
        },
        {
            id: 2,
            name: "Fluid Mechanics"
        },
        {
            id: 3,
            name: "Thermodynamics"
        }
    ])

    const [skill_list, setSkill_list] = useState([])

    const [selected, setSelected] = useState(false)

    const skill = {
        "Strength of Materials": ["som_skill1", "som_skill2", "som_skill3"],
        "Fluid Mechanics": ["som_skill1", "som_skill2", "som_skill3"],
        "Thermodynamics": ["som_skill1", "som_skill2", "som_skill3"],
    }

    function populateSkill(event) {
        setSkill_list(skill[event.target.value])
        setSelected(true)
        console.log(skill_list)
    }

    function updateMetrics(event) {
        // setSkill_list(skill[event.target.value])
        // console.log(skill_list)
    }

    return (
        <div class="d-flex justify-content-around">
            <div>
                <select className="form-select" aria-label="Default select example" onChange={populateSkill}>
                    <option defaultValue={""}>Select a subject</option>
                    {subjects.map((item) => (
                        <option value={item.name} key={item.id}>{item.name}</option>
                    ))
                    }
                </select>
            </div>

            <div>
                {
                    selected && <select className="form-select" aria-label="Default select example" onChange={updateMetrics}>
                        <option defaultValue={""}>Select the skills</option>
                        {skill_list.map((item) => (
                            <option value={item} >{item}</option>
                        ))
                        }
                    </select>
                }
            </div>

        </div>
    )
}