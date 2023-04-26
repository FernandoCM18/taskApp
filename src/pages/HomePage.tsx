import styled from 'styled-components';
import { Layout } from '../layouts/Layout';
import { Header, TaskList, ProjectList, FilterList } from '../components/';
import { TitleSection, P, WrapperFlex } from '../styles/';
import { PROJECTS, TASKS, USERS } from '../data/data';

export const HomePage = () => {
  return (
    <Layout title="Home page" pageDescription="Home page Dashboard projects">
      <Header user={USERS[0]} />
      <TitleSection>Projects</TitleSection>
      { 
        <ProjectList projects={PROJECTS} />
      }
      <section>
        <WrapperFlex>
          <TitleSection>My Task</TitleSection>
          <SeeAll>See all</SeeAll>
        </WrapperFlex>
        <FilterList />
        <TaskList tasks={TASKS} />
      </section>
    </Layout>
  );
};

const SeeAll = styled(P)`
  color: ${({theme}) => theme.primary};
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 1rem;
`;



