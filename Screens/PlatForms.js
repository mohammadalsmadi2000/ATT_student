import { Button, Platform, StyleSheet, Text, View } from "react-native";

import { CardList } from "react-native-card-list";
import Playground from "./PlayGround";
import React from "react";

const PlatForms = (props) => {
  const cards = [
    {
      id: "0",
      title: "Shamal Start",
      picture: require("../assets/figuur-i-227.png"),
      content: (
        <View>
          <Button
            title="WEB"
            onPress={() => {
              props.navigation.navigate("Play", {
                uri: "https://www.shamalstart.com/ar/",
              });
            }}
          />
          <Text>
            Established by Luminus Education and funded by the European Union,
            Luminus ShamalStart launched in 2016 to provide makers, innovators
            and entrepreneurs in Jordan – with focus on the northern regions –
            with a comprehensive ecosystem that facilitates transforming
            progressive ideas into actual businesses that can best serve the
            local communities. Incepted in partnership with The Royal Scientific
            Society – iPARK, Luminus ShamalStart is inspired by and named after
            the north of Jordan. Luminus ShamalStart firmly believes in
            innovation and entrepreneurship. While we are aware of the potential
            of the youth, we understand the need for new ideas and businesses in
            the field of manufacturing and services. Luminus ShamalStart is the
            leading start-up accelerator in Jordan. Our goal is to enable
            entrepreneurs to confidently enter and navigate the business world
            with confidence. Innovators, makers, and entrepreneurs have access
            to FabLab Irbid – a state-of-the-art manufacturing space – the first
            of its kind in Jordan and one of the 20 largest digital fabrication
            laboratories in the world. FabLab Irbid grants innovators and
            creators access to production areas, workspaces, advanced and
            easy-to-use equipment, and tools, as well as a resident team of
            experts and specialists.
          </Text>
        </View>
      ),
    },
    {
      id: "1",
      title: " ",
      picture: require("../assets/logo.png"),
      content: (
        <View>
          <Button
            title="WEB"
            onPress={() => {
              props.navigation.navigate("Play", {
                uri: "https://marsrobotic.com/Home.aspx",
              });
            }}
          />
          <Text>
            Mars Robotics: Provides autonomous robotic solutions including
            Unmanned Aerial Vehicles in the category of fixed wing, rotary wing,
            and VTOL UAVs in the area of hardware, peripherals, networks,
            software, support, service, and training for various applications
            such as Aerial Photography and Videos, Surveying, Homeland Security,
            Surveillance, Search and Rescue, Infrastructure Inspection,
            Precision Agriculture, and relevant consulting services.
          </Text>
        </View>
      ),
    },
    {
      id: "2",
      title: "",
      picture: require("../assets/6a1e1ef119c24b1ab6287a9507af3dc2.png"),
      content: (
        <View>
          <Button
            title="WEB"
            onPress={() => {
              props.navigation.navigate("Play", {
                uri: "https://www.jordanamco.com",
              });
            }}
          />
          <Text>
            AMCo-JODDB : تم تأسيس الشركة الأردنية المتقدمة لتشكيل المعادن عام
            2006 بهدف إنشاء مركز متميز للصناعات الدقيقة ، لدعم وتطوير القاعدة
            الصناعية في الأردن بالإضافة إلى استكشاف فرص التصدير للأسواق
            الإقليمية والدولية. تطمح الشركة لأن تكون في الصدارة فيما يتعلق
            بالصناعات المتقدمة في الأردن، بالإضافة إلى تقديم خدماتها الصناعية
            والاستشارية وتقديم الدعم الفني إلى الشركات الأخرى المحلية من حيث
            اختيار المعدات والمعالجة الحرارية ومتطلبات التدريب والتأهيل على
            الأجهزة المحوسبة الحديثة. المصنع تقع الشركة الأردنية المتقدمة لتشكيل
            المعادن في منطقة كادبي الصناعية، حيث تم تصميم منشأة صناعية ذات
            مواصفات فنيه متطورة لاستيعاب عمليات الشركة. يمكن مبدأ التصميم فريق
            عمل الشركة من تشغيل ماكينات محوسبة متطورة ذات جوده وكفاءة عالية في
            جو عمل محفز على المرونة والطاقة الانتاجية العالية لضمان إنتاج وتشغيل
            المعادن على مستوى عالمي. قدراتهم: الاستثمار في آخر ما توصلت إليه
            التكنولوجيا في تشغيل وتسوية المعادن، مكن الشركة من تصنيع قطع متعددة
            الأحجام من معادن مختلفة، مثل الفولاذ والسكب والألمنيوم والتيتانيوم
            بالإضافة إلى تحقيق درجة عالية من الدقة تصل لغاية ±0.008 ملم. تشمل
            قدرات المصنع: التشغيل والمعالجة الحرارية والجلخ الإسطواني والأفقي،
            الهندسة العكسية، ومركز تدريب متطور. مركز التدريب تحتوي الشركة الشركة
            الأردنية المتقدمة لتشكيل المعادن على قاعات تدريبية مجهزة بأحدث
            التجهيزات والمعدات التقنية التي تساهم في مواكبه تطورات القطاع، وذلك
            من خلال مركز تدريب في مجالي برمجة ألآت التحكم الرقمي CNC والأساليب
            المتطورة في الصناعات الدقيقة وصيانة ماكينات الخراطة المحوسبة
          </Text>
        </View>
      ),
    },
    {
      id: "3",
      title: "",
      picture: require("../assets/t2logo_0.png"),
      content: (
        <View>
          <Button
            title="WEB"
            onPress={() => {
              props.navigation.navigate("Play", {
                uri: "https://www.t2.sa/ar",
              });
            }}
          />
          <Text>
            شركة سعودية يكمن تركيزها الأساسي في مجال الأبحاث وتطوير الأعمال،
            هدفها الأول هو تقديم الدعم والحلول الذكية والإبداعية لعملائها لتحسين
            وتطوير أعمالهم في كافة المجالات، مما يساهم في نمو وتطوير أعمالهم
            بجودة عالية. حرصت T2 على تطوير منتجات تقنية واسعة، صممت خصيصاً لتلبي
            متطلبات العملاء في كافة المجالات والقطاعات الحكومية والخاصة بشغف
            وابتكار وبالاعتماد على فريق عمل شاب يتمتع بالمهارة والخبرة في بيئة
            عمل محفزة للتطور والإبداع. ***************************************
            الفئات المستهدفة للتدريب والتوظيف: طلاب تخصصات تقنية المعلومات الذين
            تخرجوا او انهوا المتطلبات النظرية لتخرجهم ويمتازون بالمهارة والشغف
            للبرمجة والتطوير والابتكار.
          </Text>
        </View>
      ),
    },
    {
      id: "4",
      title: "",
      picture: require("../assets/248685033_105219291960482_8537399432499411053_n.jpg"),
      content: (
        <View>
          <Button
            title="WEB"
            onPress={() => {
              props.navigation.navigate("Play", {
                uri: "https://www.joransom.com/homear.php",
              });
            }}
          />
          <Text>
            هي شركة محلية، مسجلة في سجل الشركات ذات مسؤولية محدودة تحت الرقم
            (59400 ،(ومتخصصة في الأمن السيبرانـــي مقرها شمــال الأردن من محافظة
            اربد، المملكة الاردنية الهاشمية، تأسست عام 202O تعد الشركة اليوم من
            بين الشركات الناشئة الرائدة في مجال الأمن السيبراني، التي تقدم
            مجموعة شاملة من وسائل التعلم والتدريب على مناهج متخصصة فــي الامــن
            السيبرانــي، ( أمــن المعلومـــات والشبكــات والتطبيقــات وقواعــد
            البيانات والهندسة الاجتماعية )، بالإضافة إلى تقديم الحلول والبرمجيات
            التــي تساهم في حل مشكلات الاختراقــات والتهديــدات السيبرانيــة
            وتنظم خدمــات الاستشارات وأمن تكنولوجيا المعلومات. تسعى لمساعدة
            المؤسسات على التخطيط وبناء وتشغيل برامج أمن المعلومات الناجحة، وحل
            مشاكل الأمان، وتنفيذ مشاريع محددة لأمن تكنولوجيا المعلومات.
            امتيازات: يتمتع كل فــرد من هذا الفريق بمزايا و مهــارات وخبــرات في
            مجال التدريب والحلول البرمجية والاستشارات، وتطوير الأعمال وتكنولوجيا
            المعلومات والاتصالات.كما ويتحلى الفريق بفهــم واســع وعميــق للشــرق
            الأوسط والعالــم وحاجتــه الماســة للتدريــب المعتمــد على المناهــج
            المقدمــة من الشركات ً العالمية، كما تسعى لتكون مركزا ً متخصـصا
            لإجــراء الامتحانــات، ومركز استقطاب للمبرمجين القادرين على إيجاد
            الحلول البرمجية المتعلقة بالأمن السيبراني. أهداف الشركة: 1-تدريب
            وتأهيل وبناء قــدرات الشبـــاب في المعـــارف الرئيسيـــة المتعلقـــة
            بالشبكـــات وأمن المعلومات، باعتماد المناهج التي تطرحها الشركات
            العالمية المتخصصة في هذا المجال. 2-توفير مركز اختبارات متخصص
            للحصــول على الشهــادات العالميــة المعتمــدة. 3-توفير بيئة برمجية
            قادرة على بناء حلول لمشكلات الاختراق، والتهديدات السيبرانية.
            4-المساهمة والمشاركة بتقديم الخبرات والاستشــارات للمؤسســات
            الحكوميــة والخاصة فيما يتعلق بتقنيات الأمن السيبراني. بناء شبكة من
            التحالفات الاستراتيجية لتشكيل قاعدة معرفية متطورة ومحدثـة، والتي من
            شأنها أن تمكننا من مشاركة خبرات جماعية دولية مع عملائنا. 5-دعم
            وتعزيز المجتمع المحلـــي من خـــلال المساهمـــة الفعالـــة في
            الأنشطـــة والفعاليات المحلية.
          </Text>
        </View>
      ),
    },
    {
      id: "5",
      title: "",
      picture: require("../assets/Jadara-Logo-transparent.png"),
      content: (
        <View>
          <Button
            title="WEB"
            onPress={() => {
              props.navigation.navigate("Play", {
                uri: "https://www.jadaraelectronics.com",
              });
            }}
          />
          <Text>
            شركة أردنية بامتياز. تصنع أجهزة تدريبية وتعليمية، بكل ثقة مكتوب
            عليها ( صُنع في الأردن) وتشمل الشركة تصنيع وصيانة الاجهزة والمعدات ،
            تأسست عام 2006 ومنذ ذلك الحين تخدم طلب القطاع التعليمي بما في ذلك
            مؤسسة التدريب المهني ؛ الكليات المتوسطة التطبيقية ، والجامعات في
            الأردن والشرق الأوسط. و نظراً لزيادة الطلب على منتجات الطاقة
            المتجددة في الأردن ؛ قامت Jadara Electronics بتوسيع نطاق منتجاتها
            وخدماتها لتشمل حلول الطاقة المتجددة للقطاع التعليمي والشركات
            الصناعية الكبرى التي يمكن أن تستفيد من هذه التكنولوجيا المبتكرة
            وشاركت مع القادة في هذا القطاع لتقديم أفضل مجموعة من المنتجات و
            الخدمات.
          </Text>
        </View>
      ),
    },
    {
      id: "6",
      title: "",
      picture: require("../assets/222141661_212164887586568_4433114389704496775_n.jpg"),
      content: (
        <View>
          <Button
            title="WEB"
            onPress={() => {
              props.navigation.navigate("Play", {
                uri: "https://www.alokab.co/ar/?fbclid=IwAR1woQ1oEChH0VGJenf5Ub4gH_PAci4YedHfBtZWdNS8su1PS7anxhkOIyg",
              });
            }}
          />
          <Text>
            تطورت الشركة بشكل سريع منذ إنشائها في عام 2000 ؛ البداية كانت من
            خلال تقديم خدمات توريد المعدات وخطوط الإنتاج وتركيب وتشغيل المصانع
            وتوريد المواد الخام بالإضافة إلى خدمات الصيانة للمصانع الصغيرة.
            لكنها كانت البداية فقط، فالرؤية أبعد من ذلك. حيث تمت إعادة هيكلة
            الشركة وتطوير خدمات استشارية مبتكرة ؛وذلك بناءً على احتياجات السوق
            المحلية والعالمية ، وبالتالي أصبحت الاستشارات الصناعية المتقدمة
            المحور الرئيسي للعمل ؛ حيث يتم تقديم حزمة من الخدمات الاستشارية على
            طول عمر المشروع ، بدءًا من مرحلة تحليل الفرص الاستثمارية إلى تنفيذ
            المشروع وخدمات ما بعد التشغيل؛ ومن هنا جاء شعار الشركة في هذه
            المرحلة (معكم من التخطيط وحتى الإنتاج). تمتلك شركة العُـقاب اليوم
            خبرة واسعة في معظم قطاعات الأعمال؛ بحكم تطويرها للعديد من المشاريع
            الاستثمارية، واجرائها عدد كبير من الدراسات الاقتصادية التفصيلية
            المتخصصة، بالإضافة لتقديم خدمات استشارية متنوعة باتت اليوم أساسية
            للقطاع الحكومي بشكل خاص
          </Text>
        </View>
      ),
    },
  ];

  return (
    <View style={styles.container}>
      <CardList cards={cards} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});

export default PlatForms;
