# Acade_mind

9. Working_with_Fragments,Portals,Refs
  
  1) Fragments 
  
    React에서는 한 개의 컴포넌트에서 두 개 이상의 element를 반환할 때 특별한 작업이 필요하다.
    그 특별한 작업이란 컴포넌트에 사용한 element를 하나의 tag로 감싸 주는 것이다. 
    React를 처음 시작할 때는 이러한 Fragment의 개념이 익숙하지 않을 뿐더러, 소규모 프로젝트에서는 별다른 문제점이 발생하지 않는다.
    하지만, React는 대규모 프로젝트에 이용되기 쉽고 그럴 경우 반환되는 전체 HTML은 불필요한 tag로 감싸질 것이다. 
    극단적으로 예를 들어 아래와 같은 상황이 발생할지도 모른다.

    <div>
     <div>
      <div>
       <div>
        <div>
         <div>
           <Test content />
         </div>
        </div>
       </div>
      </div>
    </div>
   </div>

     이런 불필요한 tag의 남발이 발생하는 것을 막기 위해 우리는 React.Fragment 를 사용하는 것에 익숙해져야 한다.
        render() {
          return (
            <React.Fragment>
              <ChildA />
              <ChildB />
              <ChildC />
            </React.Fragment>
          );
        }
       React 공식 문서에서 가져온 위와 같은 코드는 React.Fragment로 여러 개의 Child component를 감싸 하나의 element로써 렌더링 할 수 있게 도와준다.  
