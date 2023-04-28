var conferencePaper = [
    {
        title: "Synpose: A Large-Scale and Densely Annotated Synthetic Dataset for Human Pose Estimation in Classroom",
        authors: "Zefang Yu; Yangcheng Li; Yicheng Liu; Ting Liu; Yuzhuo Fu",
        conference: "International Conference on Acoustics, Speech and Signal Processing (ICASSP 22)",
        abstract: "Deep learning-based methods for human pose estimation require large volumes of training data to achieve superior performance. However, data acquisition in classroom environments raises privacy concerns, which will undoubtedly hinder the development of the latest deep learning techniques in education domain. Due to the absence of large, richly annotated classroom datasets, research into classroom observation has had to be done by manually collecting and annotating datasets. Unfortunately, the annotation of such data is time-consuming and challenging in over-crowded classrooms. To break through these limitations, we open source SynPose, a large, densely labeled synthetic dataset specifically designed for crowded human pose estimation in classroom and meeting scenarios. Moreover, we propose a novel CTGAN to bridge the domain gap. Comprehensive experiments on real-world classroom images show that our proposed dataset and method deliver important performance benefits compared to existing datasets, revealing the potential of SynPose for future studies."
    },
];

var arxivPaper = [
    {
        title: "CBLab: Scalable Traffic Simulation with Enriched Data Supporting",
        authors: "Chumeng Liang, Zherui Huang, Yicheng Liu, Zhanyu Liu, Guanjie Zheng, Hanyuan Shi, Yuhao Du, Fuliang Li, Zhenhui Li",
        abstract: "Traffic simulation provides interactive data for the optimization of traffic policies. However, existing traffic simulators are limited by their lack of scalability and shortage in input data, which prevents them from generating interactive data from traffic simulation in the scenarios of real large-scale city road networks. In this paper, we present City Brain Lab, a toolkit for scalable traffic simulation. CBLab is consist of three components: CBEngine, CBData, and CBScenario. CBEngine is a highly efficient simulators supporting large scale traffic simulation. CBData includes a traffic dataset with road network data of 100 cities all around the world. We also develop a pipeline to conduct one-click transformation from raw road networks to input data of our traffic simulation. Combining CBEngine and CBData allows researchers to run scalable traffic simulation in the road network of real large-scale cities. Based on that, CBScenario implements an interactive environment and several baseline methods for two scenarios of traffic policies respectively, with which traffic policies adaptable for large-scale urban traffic can be trained and tuned. To the best of our knowledge, CBLab is the first infrastructure supporting traffic policy optimization on large-scale urban scenarios."
    },
];

var researchExperience = [
    {
        institution: "Shanghai Jiao Tong University, Institution of Parallel And Distributed System (IPADS), advised by Jinyu Gu",
        workings: [
            "Develop an autopilot system.",
            "Manage and develop a sanitizer system in institution's own micro kernel operating system.",
            "Reasearch in container security.",
            "Survey and reproduce security related CVEs."
        ]
    },
    {
        institution: "Shanghai Jiao Tong University, John Hopcoft Institution, advised by Guanjie Zheng",
        workings: [
            "Opensource an large scale traffic simulator.",
            "Reasearch in offline reinforcement learning under traffic signal control (TSC) problem.",
            "Reasearch in an general proposed large traffic flow model."
        ]
    },
    {
        institution: "Shanghai Jiao Tong University, Intelectual Computer Architecture Technology, advised by Zefang Yu",
        workings: [
            "Develop an automated human pose estimation (HPE) dataset collector."
        ]
    }
];

var projects = [
    {
        name: "Mini Basic",
        ref: "",
        description: ""
    },
    {
        name: "Inode File System",
        ref: "",
        description: ""
    },
    {
        name: "Parabox for Shell",
        ref: "",
        description: ""
    },
]

export {
    conferencePaper, arxivPaper, researchExperience, projects
};
