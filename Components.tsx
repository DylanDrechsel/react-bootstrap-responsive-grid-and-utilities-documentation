/**
 * CONTAINER COMPONENT
 * 
 * The Container component provides the foundational wrapper for the grid system.
 * It centers content horizontally and applies responsive max-widths at different breakpoints.
 * 
 * Props:
 * - fluid: When true, creates a full-width container that spans the entire viewport
 * - children: React nodes to be rendered inside the container
 * - className: Additional CSS classes to apply to the container 
 */

import { type FC } from "react";

interface ContainerProps {
    fluid?: boolean;
    children: React.ReactNode; // Accepts anything that React is capable of rendering as its children (HTML Elements, Strings, Numbers, etc...)
    className?: string;
};

const Container: FC<ContainerProps> = ({
    fluid = false,
    children,
    className = ''
}) => {
    // Choose between fixed-width container (with responsive max-widths) or fluid container (full-width)
    const containerClass = fluid ? 'container-fluid' : 'container';

    return (
        <div className={`${containerClass} ${className}`}>
            {children}
        </div>
    );
};

/**
 * ROW COMPONENT
 * 
 * The Row component creates a horizontal group of columns using flexbox.
 * It handles the negative margins that offset the column padding to maintain proper alignment
 * 
 * Props:
 * - children: Column components or other React nodes
 * - className: Additional CSS classes for custom styling
 * - noGutters: When true, removes the spacing between columns
 */

interface RowProps {
    children: React.ReactNode;
    className?: string;
    noGutters?: boolean;
};

const Row: FC<RowProps> = ({
    children,
    className = '',
    noGutters = false
}) => {
    // Apply no-gutters class to remove spacing between columns if requested
    const rowClass = noGutters ? 'row no-gutters' : 'row';

    return (
        <div className={`${rowClass} ${className}`}>
            {children}
        </div>
    );
};

/**
 * COLUMN COMPONENT (This is where the meat and potatoes happen!)
 * 
 * The Col component represents individual columns within a row.
 * It supports responsive breakpoints and can specify different column widths at different screen sizes
 * My Grid System is based on 12 columns, so values 1-12 represent portions of the full Row
 * 
 * Breakpoint Props
 * - number (1-12): Specifies how many column this element should span
 * - 'auto': Column takes up only as much space as its content requires
 * - undefined: No specific width constraint for this breakpoint
 * 
 * Offset Props
 * - number (0-11): Adds left margin to push the column to the right
 * 
 * Breakpoint Sizes
 * - xxs: Extra small devices (phones, <576px)
 * - xs: Small devices (landscape phones, ≥576px)
 * - sm: Medium devices (tablets, ≥768px)
 * - md: Small desktop (small desktops, ≥992px)
 * - lg: Large desktop (medium desktops, ≥1200px)
 * - xl: Extra large desktop (large desktops, ≥1400px)
 * - xxl: Extra extra large desktop (larger desktops, ≥1600px)
 */

interface ColProps {
    children: React.ReactNode;
    className?: string;

    // Responsive column width props
    xxs?: number | 'auto';
    xs?: number | 'auto';
    sm?: number | 'auto'; 
    md?: number | 'auto';
    lg?: number | 'auto';
    xl?: number | 'auto';
    xxl?: number | 'auto';

    // Offset props - add left margin to push column to the right
    offsetXxs?: number;
    offsetXs?: number;
    offsetSm?: number;
    offsetMd?: number;
    offsetLg?: number;
    offsetXl?: number;
    offsetXxl?: number;
};

const Col: FC<ColProps> = ({
    children, 
    className = '',
    xxs,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    offsetXxs,
    offsetXs,
    offsetSm,
    offsetMd,
    offsetLg,
    offsetXl,
    offsetXxl
}) => {
/**
 * buildClasses - Constructs the CSS class string for the columns
 * 
 * This function dynamically builds the appropriate CSS classes based on the props passed.
 * It handles both column sizing and offset classes for all responsive breakpoints.
 * 
 * Class Naming Conventions:
 * - Column sizes: 'col-{breakpoint}-{size}' (e.g., 'col-md-6')
 * - Auto columns: 'col-{breakpoint}-auto' (e.g., 'col-lg-auto')
 * - Offsets: 'offset-{breakpoint}-{amount}' (e.g., 'offset-md-2')
 */

    const buildClasses = () => {
        const classes = ['col'];

        // Adds responsive column size classes for each breakpoint
        // check if size is defined, then check if its auto-width or specific column count
        if (xxs !== undefined) classes.push(xxs === 'auto' ? 'col-xxs-auto' : `col-xxs-${xxs}`);
        if (xs !== undefined) classes.push(xs === 'auto' ? 'col-xs-auto' : `col-xs-${xs}`);
        if (sm !== undefined) classes.push(sm === 'auto' ? 'col-sm-auto' : `col-sm-${sm}`);
        if (md !== undefined) classes.push(md === 'auto' ? 'col-md-auto' : `col-md-${md}`);
        if (lg !== undefined) classes.push(lg === 'auto' ? 'col-lg-auto' : `col-lg-${lg}`);
        if (xl !== undefined) classes.push(xl === 'auto' ? 'col-xl-auto' : `col-xl-${xl}`);
        if (xxl !== undefined) classes.push(xxl === 'auto' ? 'col-xxl-auto' : `col-xxl-${xxl}`);

        // Add offset classes for each breakpoint where offset is specified
        // Offsets create left margin to push the column away from the left edge
        if (offsetXxs !== undefined) classes.push(`offset-xxs-${offsetXxs}`);
        if (offsetXs !== undefined) classes.push(`offset-xs-${offsetXs}`);
        if (offsetSm !== undefined) classes.push(`offset-sm-${offsetSm}`);
        if (offsetMd !== undefined) classes.push(`offset-md-${offsetMd}`);
        if (offsetLg !== undefined) classes.push(`offset-lg-${offsetLg}`);
        if (offsetXl !== undefined) classes.push(`offset-xl-${offsetXl}`);
        if (offsetXxl !== undefined) classes.push(`offset-xxl-${offsetXxl}`);

        return classes.join(' ');
    };

    return (
        <div className={`${buildClasses()} ${className}`}>
            {children}
        </div>
    );
};

export { Container, Row, Col };




import React from 'react';
import { Container, Row, Col } from './Components';

const ComponentExamples: React.FC = () => {
  return (
    <div>
      {/* Basic Grid Example */}
      <Container>
        <Row>
          <Col md={4}>
            <div style={{ background: '#f8f9fa', padding: '1rem', marginBottom: '1rem' }}>
              Column 1 (md-4)
            </div>
          </Col>
          <Col md={4}>
            <div style={{ background: '#e9ecef', padding: '1rem', marginBottom: '1rem' }}>
              Column 2 (md-4)
            </div>
          </Col>
          <Col md={4}>
            <div style={{ background: '#dee2e6', padding: '1rem', marginBottom: '1rem' }}>
              Column 3 (md-4)
            </div>
          </Col>
        </Row>
      </Container>

      {/* Responsive Grid Example */}
      <Container>
        <Row>
          <Col xxs={12} xs={6} sm={4} md={3} lg={3} xl={3} xxl={4}>
            <div style={{ background: '#cfe2ff', padding: '1rem', marginBottom: '1rem' }}>
              Responsive Column (xl = 3) (xxl = 4)
            </div>
          </Col>
          <Col xxs={12} xs={6} sm={4} md={3} lg={3} xl={2} xxl={4}>
            <div style={{ background: '#b3d9ff', padding: '1rem', marginBottom: '1rem' }}>
              Responsive Column (xl = 2) (xxl = 4)
            </div>
          </Col>
          <Col xxs={12} xs={6} sm={4} md={3} lg={3} xl={5} xxl={1}>
            <div style={{ background: '#99ccff', padding: '1rem', marginBottom: '1rem' }}>
              Responsive Column (xl = 5) (xxl = 1)
            </div>
          </Col>
          <Col xxs={12} xs={6} sm={12} md={3} lg={3} xl={2} xxl={3}>
            <div style={{ background: '#80bfff', padding: '1rem', marginBottom: '1rem' }}>
              Responsive Column (xl = 2) (xxl = 3)
            </div>
          </Col>
        </Row>
      </Container>

      {/* Auto-width and Offset Example */}
      <Container>
        <Row>
          <Col md={'auto'}>
            <div style={{ background: '#fff3cd', padding: '1rem', marginBottom: '1rem' }}>
              Auto-width column
            </div>
          </Col>
          <Col md={6}>
            <div style={{ background: '#ffeaa7', padding: '1rem', marginBottom: '1rem' }}>
              Fixed width column
            </div>
          </Col>
          <Col md={'auto'}>
            <div style={{ background: '#fdcb6e', padding: '1rem', marginBottom: '1rem' }}>
              Auto-width column
            </div>
          </Col>
        </Row>
        
        <Row>
          <Col md={6} offsetMd={1}>
            <div style={{ background: '#d1ecf1', padding: '1rem', marginBottom: '1rem' }}>
              Centered with offset
            </div>
          </Col>
        </Row>
      </Container>

      {/* Fluid Container Example */}
      <Container fluid>
        <Row>
          <Col>
            <div style={{ background: '#f8d7da', padding: '1rem', marginBottom: '1rem' }}>
              Full-width fluid container
            </div>
          </Col>
        </Row>
      </Container>

      {/* No Gutters Example */}
      <Container>
        <Row noGutters>
          <Col md={6}>
            <div style={{ background: '#d4edda', padding: '1rem' }}>
              No gutter column 1
            </div>
          </Col>
          <Col md={6}>
            <div style={{ background: '#c3e6cb', padding: '1rem' }}>
              No gutter column 2
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ComponentExamples;